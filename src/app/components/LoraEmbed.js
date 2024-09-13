"use client";
import { useEffect, useRef } from "react";

export function LoraEmbed() {
	const divRef = useRef(null);

	useEffect(() => {
		console.log("window.BeLivePlayerWidget", window.BeLivePlayerWidget);
		const loraPlayerContainer = window.BeLivePlayerWidget.initialize({
			showId: "612a9083-3275-425d-be3d-128e03b96102",
			container: divRef.current,
		});
	}, []);

	return <div ref={divRef} className="w-[375px]"></div>;
}
