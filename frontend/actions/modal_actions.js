export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "15px"
    return {
        type: OPEN_MODAL,
        modal
    };
};

export const closeModal = () => {
    document.body.style.overflow = "unset"
    document.body.style.paddingRight = "0px"


    return {
        type: CLOSE_MODAL
    };
};