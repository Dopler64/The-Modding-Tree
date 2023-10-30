var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

    
}

// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)

addNode("Pip", {
    layerShown: true,
    tooltip() {return "Gain " + new Decimal(1) + " pip"},
    tooltipLocked() {return "Gain " + new Decimal(1) + " pip"},
    row: "0",
    canClick() {return player.points.gte(0)},
    onClick() {player.points = player.points.add(new Decimal(1))}
}, 
)

addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    previousTab: "",
    leftTab: true,
}
)