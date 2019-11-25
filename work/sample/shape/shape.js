let shape = {
    drawStar: function(x, y) {
        line(x+0, y-10, x+0, y+10);
        line(x-8, y-5, x+8, y+5);
        line(x-8, y+5, x+8, y-5);
    },
};
