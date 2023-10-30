var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

    
}

var basePipValue = {value: new Decimal(1),}

// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)

addNode("P", {
    layerShown: true,
    tooltip() {return "Gain " + value + " pip"},
    tooltipLocked() {return "Gain " + value + " pip"},
    row: "0",
    canClick() {return player.points.gte(0)},
    onClick() {player.points = player.points.add(value)}
}, 
)

addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    previousTab: "",
    leftTab: true,
}
)