"use client";

import Script from "next/script";

export function LoraShortVideos({ as = "carousel-playlist", playlistId }) {
	return (
		<>
			{as === "carousel-playlist" && (
				<carousel-playlist
					video-height="400"
					playlist-id={playlistId}
				></carousel-playlist>
			)}
			{as === "grid-playlist" && (
				<grid-playlist
					video-height="400"
					playlist-id={playlistId}
				></grid-playlist>
			)}
			{as === "story-block-playlist" && (
				<story-block-playlist
					item-per-row="3"
					playlist-id={playlistId}
				></story-block-playlist>
			)}
		</>
	);
}
