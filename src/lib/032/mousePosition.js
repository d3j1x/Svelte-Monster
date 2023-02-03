const store = {
    subscribe(fn) {
        fn({x: 0, y: 0});
        document.body.addEventListener("mousemove",move);

        function move(event){
            fn({
                x : event.clientX,
                y : event.clientY,

            });
        }
        return () => {
            document.body.removeEventListener("mousemove",move);
        }
    },   
}

export default store;
