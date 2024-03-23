const handleModalAnimation = (direction) => {
    let animationIn, animationOut;

    switch (direction) {
        case "Right":
            animationIn = "slideInRight";
            animationOut = "slideOutRight";
            break;
        case "Left":
            animationIn = "slideInLeft";
            animationOut = "slideOutLeft";
            break;
        case "Up":
            animationIn = "slideInUp";
            animationOut = "slideOutDown";
            break;
        case "Down":
            animationIn = "slideInDown";
            animationOut = "slideOutUp";
            break;
        default:
            animationIn = "slideInRight";
            animationOut = "slideOutRight";
            break;
    }

    return { animationIn, animationOut };
}

export default handleModalAnimation;