(function(thisObj) {
    function createLyricsPanel(thisObj) {
        var panel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Lyrics Holder", undefined, { resizeable: true });

        panel.orientation = "column";
        panel.alignChildren = ["fill", "top"];
        panel.spacing = 10;
        panel.margins = 10;

        // Set dark background for the panel (if floating)
        try {
            panel.graphics.backgroundColor = panel.graphics.newBrush(
                panel.graphics.BrushType.SOLID_COLOR, 
                [0.12, 0.12, 0.12] // AE-style dark gray
            );
        } catch (e) {}

        // Title text
        var title = panel.add("statictext", undefined, "Paste or type your lyrics:");
        try {
            title.graphics.foregroundColor = title.graphics.newPen(
                title.graphics.PenType.SOLID_COLOR, 
                [1, 1, 1], // White
                1
            );
        } catch (e) {}

        // Lyrics text box
        var lyricsBox = panel.add("edittext", undefined, "", {
            multiline: true,
            scrolling: true
        });
        lyricsBox.preferredSize = [300, 400];

        // Set dark background and light text color for the lyrics box
        try {
            lyricsBox.graphics.backgroundColor = lyricsBox.graphics.newBrush(
                lyricsBox.graphics.BrushType.SOLID_COLOR, 
                [0.1, 0.1, 0.1] // slightly darker than panel
            );
            lyricsBox.graphics.foregroundColor = lyricsBox.graphics.newPen(
                lyricsBox.graphics.PenType.SOLID_COLOR, 
                [1, 1, 1], // White text
                1
            );
        } catch (e) {}

        // Optional: Set font style if you want to match AE more
        lyricsBox.font = "ArialMT:12";

        panel.onResizing = panel.onResize = function () {
            panel.layout.resize();
        };

        panel.layout.layout(true);
        return panel;
    }

    var myPanel = createLyricsPanel(thisObj);
    if (myPanel instanceof Window) {
        myPanel.center();
        myPanel.show();
    }
})(this);

// Copyright reserved by festverse 2025