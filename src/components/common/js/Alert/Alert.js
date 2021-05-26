import swal from 'sweetalert';

const displaySimpleAlert = (title, text, buttonText, type) => {
    swal({
        title: title,
        text: text,
        icon: type,
        button: buttonText,
    });
}
export {displaySimpleAlert};