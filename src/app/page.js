import Script from "next/script";
import { LoraEmbed } from "./components/LoraEmbed";
import { LoraShortVideos } from "./components/LoraShortVideos";

export default function Home() {
	return (
		<main className="min-h-screen p-6">
			<LoraShortVideos
				as="carousel-playlist"
				playlistId="dd630806-2ac9-4e2d-4cbb-08daaaab64a7"
			/>
			<div className="h-8"></div>
			<LoraShortVideos
				as="grid-playlist"
				playlistId="dd630806-2ac9-4e2d-4cbb-08daaaab64a7"
			/>
			<div className="h-8"></div>
			<LoraShortVideos
				as="story-block-playlist"
				playlistId="dd630806-2ac9-4e2d-4cbb-08daaaab64a7"
			/>
			<div className="h-8"></div>
			<LoraEmbed />
		</main>
	);
}
