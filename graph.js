/// <reference path="https://jsxgraph.org/distrib/index.d.ts" />

let board = JXG.JSXGraph.initBoard("box", {
	boundingbox: [-2 * Math.PI, 2, 2 * Math.PI, -2],
	axis: true,
	copyright: false,
});

let f = board.jc.snippet("cos(x)*cos(x)", true, "x", true);
board.create("functiongraph", [f], { strokeWidth: 4 });
