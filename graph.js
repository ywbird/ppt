/// <reference path="https://jsxgraph.org/distrib/index.d.ts" />

let board = JXG.JSXGraph.initBoard("box", {
	boundingbox: [-4, 4, 4, -4],
	axis: true,
	copyright: false,
});

board.create("functiongraph", [(x) => 1 / x], { strokeWidth: 4 });
