export const scrollToElement = (
    id,
    behaviorType = "smooth",
    blockType = "start"
) => {
    // console.log("Function called with ID:", id, "and behavior:", behaviorType);
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: behaviorType, block: blockType });
    } else {
        console.error(`Element with ID ${id} not found.`);
    }
};
