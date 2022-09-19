

const tic = {
    board: ['','','','','','','','','',],
    simbols: ['X','O'],
    container_element: null,

    init: function(container) {
        this.container_element = container;
    },
    draw: function() {
        let content="";
        for ( i in this.board) {
            content += '<div>' + this.board[i] + '</div>';
        }
        this.container_element.innerHTML = content;
    }
}

tic.init(document.querySelector('.game'));
tic.draw();