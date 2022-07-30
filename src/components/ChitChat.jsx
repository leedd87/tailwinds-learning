import React from "react";
import Bubble from "./Bubble";

function ChitChat() {
	return (
		<div className="flex max-w-sm m-auto p-6 rounded-lg bg-white shadow-xl items-center">
			<div className="flex-shrink-0">
				<picture className="w-12 h-12">
					<Bubble color="white" />
				</picture>
			</div>
			<div className="ml-6 pt-1">
				<h4 className="text-blue-900 text-2xl">ChitChat</h4>
				<p className="text-black-500 text-base">You have a new message!</p>
			</div>
		</div>
	);
}

export default ChitChat;
