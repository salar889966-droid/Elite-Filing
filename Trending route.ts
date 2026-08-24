import { NextResponse } from "next/server";
import { withRepositoryAuth, repository } from "@/lib/data";
import { Movie } from "@/lib/types";

export const GET = withRepositoryAuth({ auth: "none" }, async (_req, ctx) => {
  try {
    const snapshotItems = await repository.getTrendingSnapshot(ctx);

    const movies: Movie[] = snapshotItems.map((item) => ({
      id: item.movie_id,
      title: item.title,
      posterUrl: item.poster_url,
      overview: "",
      releaseDate: "",
      cast: [],
      streamingOptions: {},
      poster: item.poster_url,
      poster_path: item.poster_url,
    }));

    console.log("[MOVIES_DATA_PATH] 4. API GET /api/movies/trending snapshotItems length:", snapshotItems.length);
    console.log("[MOVIES_DATA_PATH] 4b. API GET /api/movies/trending returning movies:", movies);

    return NextResponse.json({
      page: 1,
      results: movies,
      total_pages: 1,
      total_results: movies.length,
    });
  } catch (error: unknown) {
    console.error("Failed to fetch trending movies:", error);
    const message = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
});
