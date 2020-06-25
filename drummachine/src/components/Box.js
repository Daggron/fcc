import React from 'react'

export default function Box({
    text , audio, id, settriggred
}) {
    const audioref = React.createRef();

    const handleAudio = (value) => {
        audioref.current.play();
        settriggred(value);
    }
    
    return (
        <div onClick={() => handleAudio(id)} className="drum-pad" id={id}>
            {
                text
            }
            <audio src={audio} ref={audioref} className="clip" id={text} />
        </div>
    )
}

document.addEventListener('keydown', (e) => {
    // console.log(e.key.toUpperCase());
    const id = e.key.toUpperCase();
    const audio = document.getElementById(id);
    if(audio){
        const parent = audio.parentNode;
        parent.classList.add('active');
        audio.play();

        audio.addEventListener('ended', () => {
            parent.classList.remove('active');
        })

        document.getElementById('display').innerText = parent.id;
    }
})