-- ==============================================================================
-- Elite Filing Database Schema Migration
-- ==============================================================================

-- 1. ENUMS
-- Create form_type_enum if it doesn't already exist
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'form_type_enum') THEN
        CREATE TYPE form_type_enum AS ENUM (
            'contact',
            'booking',
            'company_formation',
            'banking_compliance',
            'newsletter'
        );
    END IF;
END $$;

-- Create lead_status_enum if it doesn't already exist
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'lead_status_enum') THEN
        CREATE TYPE lead_status_enum AS ENUM (
            'new',
            'contacted',
            'qualified',
            'closed',
            'archived'
        );
    END IF;
END $$;

-- 2. TABLES

-- Table: contacts
CREATE TABLE IF NOT EXISTS contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name TEXT,
    last_name TEXT,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Table: leads
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE,
    form_type form_type_enum NOT NULL,
    status lead_status_enum NOT NULL DEFAULT 'new',
    selected_country TEXT,
    selected_service TEXT,
    details JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Table: subscribers
CREATE TABLE IF NOT EXISTS subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_leads_contact_id ON leads(contact_id);
CREATE INDEX IF NOT EXISTS idx_leads_form_type ON leads(form_type);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);

-- 4. ROW LEVEL SECURITY (RLS) & POLICIES

-- Enable RLS on all tables
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running migration
DROP POLICY IF EXISTS "Service role full access on contacts" ON contacts;
DROP POLICY IF EXISTS "Service role full access on leads" ON leads;
DROP POLICY IF EXISTS "Service role full access on subscribers" ON subscribers;

-- Grant full access to service_role
CREATE POLICY "Service role full access on contacts"
    ON contacts
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Service role full access on leads"
    ON leads
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Service role full access on subscribers"
    ON subscribers
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Grant privileges to service_role explicitly
GRANT ALL ON TABLE contacts TO service_role;
GRANT ALL ON TABLE leads TO service_role;
GRANT ALL ON TABLE subscribers TO service_role;
