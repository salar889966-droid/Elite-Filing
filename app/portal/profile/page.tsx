"use client";

import { useState } from "react";
import { Edit2, Save } from "lucide-react";
import { toast } from "sonner";

export default function PortalProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    emailPrimary: "",
    emailSecondary: "",
    phoneNumber: "",
    address: "",
    postCode: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="w-full space-y-6">
      {/* Main Card (Exact Blueprint frame_655.00s.jpg & frame_635.00s.jpg) */}
      <div className="bg-white border border-[#e5ebef] rounded-[3px] p-6 sm:p-10 shadow-xs max-w-3xl">
        <h1 className="text-xl sm:text-2xl font-bold text-[#142d45] text-center mb-8">
          Customer Profile
        </h1>

        <form onSubmit={handleSave} className="space-y-4 text-xs sm:text-sm">
          {/* First Name */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-4">
            <label className="font-bold text-[#15324d] sm:text-right">
              First Name
            </label>
            <div className="sm:col-span-2">
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={profile.firstName}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-[#cbd5e1] rounded-[2px] px-3.5 py-2.5 text-[#1e3a58] font-medium bg-white disabled:bg-[#f8fafc] disabled:text-slate-700 outline-hidden focus:border-[#1145AC] focus:ring-1 focus:ring-[#1145AC] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-4">
            <label className="font-bold text-[#15324d] sm:text-right">
              Last Name
            </label>
            <div className="sm:col-span-2">
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={profile.lastName}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-[#cbd5e1] rounded-[2px] px-3.5 py-2.5 text-[#1e3a58] font-medium bg-white disabled:bg-[#f8fafc] disabled:text-slate-700 outline-hidden focus:border-[#1145AC] focus:ring-1 focus:ring-[#1145AC] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email (Primary) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-4">
            <label className="font-bold text-[#15324d] sm:text-right">
              Email (Primary)
            </label>
            <div className="sm:col-span-2">
              <input
                type="email"
                name="emailPrimary"
                placeholder="Enter your primary email"
                value={profile.emailPrimary}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-[#cbd5e1] rounded-[2px] px-3.5 py-2.5 text-[#1e3a58] font-medium bg-white disabled:bg-[#f8fafc] disabled:text-slate-700 outline-hidden focus:border-[#1145AC] focus:ring-1 focus:ring-[#1145AC] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email (Secondary) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-4">
            <label className="font-bold text-[#15324d] sm:text-right">
              Email (Secondary)
            </label>
            <div className="sm:col-span-2">
              <input
                type="email"
                name="emailSecondary"
                placeholder="Email (Optional)"
                value={profile.emailSecondary}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-[#cbd5e1] rounded-[2px] px-3.5 py-2.5 text-[#1e3a58] font-medium bg-white disabled:bg-[#f8fafc] disabled:text-slate-700 outline-hidden focus:border-[#1145AC] focus:ring-1 focus:ring-[#1145AC] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-4">
            <label className="font-bold text-[#15324d] sm:text-right">
              Phone Number
            </label>
            <div className="sm:col-span-2">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={profile.phoneNumber}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-[#cbd5e1] rounded-[2px] px-3.5 py-2.5 text-[#1e3a58] font-medium bg-white disabled:bg-[#f8fafc] disabled:text-slate-700 outline-hidden focus:border-[#1145AC] focus:ring-1 focus:ring-[#1145AC] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-4">
            <label className="font-bold text-[#15324d] sm:text-right">
              Address
            </label>
            <div className="sm:col-span-2">
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={profile.address}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-[#cbd5e1] rounded-[2px] px-3.5 py-2.5 text-[#1e3a58] font-medium bg-white disabled:bg-[#f8fafc] disabled:text-slate-700 outline-hidden focus:border-[#1145AC] focus:ring-1 focus:ring-[#1145AC] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Post Code / Zip Code */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-4">
            <label className="font-bold text-[#15324d] sm:text-right">
              Post Code / Zip Code
            </label>
            <div className="sm:col-span-2">
              <input
                type="text"
                name="postCode"
                placeholder="Enter your post code / zip code"
                value={profile.postCode}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-[#cbd5e1] rounded-[2px] px-3.5 py-2.5 text-[#1e3a58] font-medium bg-white disabled:bg-[#f8fafc] disabled:text-slate-700 outline-hidden focus:border-[#1145AC] focus:ring-1 focus:ring-[#1145AC] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Country */}
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-4">
            <label className="font-bold text-[#15324d] sm:text-right">
              Country
            </label>
            <div className="sm:col-span-2">
              <input
                type="text"
                name="country"
                placeholder="Enter your country"
                value={profile.country}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border border-[#cbd5e1] rounded-[2px] px-3.5 py-2.5 text-[#1e3a58] font-medium bg-white disabled:bg-[#f8fafc] disabled:text-slate-700 outline-hidden focus:border-[#1145AC] focus:ring-1 focus:ring-[#1145AC] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Edit / Save Button (Exact match to blueprint frame_635.00s.jpg) */}
          <div className="pt-6 flex items-center justify-center gap-3">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-sm rounded transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-2.5 bg-[#1145AC] hover:bg-[#0e3b96] text-white font-bold text-sm rounded shadow-xs transition-colors cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center gap-2 px-10 py-2.5 bg-[#1145AC] hover:bg-[#0e3b96] text-white font-bold text-sm rounded shadow-xs transition-colors cursor-pointer"
              >
                <Edit2 className="w-4 h-4" />
                <span>Edit</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
