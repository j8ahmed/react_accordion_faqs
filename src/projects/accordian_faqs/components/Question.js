import React, { useState, useRef, useCallback } from 'react'
import { openFAQ, closeFAQ } from '../assests/animations';

const hide = {opacity: 0, height: 0};

const Question = ({id, question, answer}) => {
    const [ open, setOpen ] = useState(false);
    const faqItem = useRef(null);
    const ans = useRef(null);

    const toggleFAQ = useCallback( () => {
        setOpen((open) => {
            return !open;
        });
        if (!open) openFAQ(faqItem.current, ans.current);
        else closeFAQ(faqItem.current);
    }, [open]);

    return (
        <li className='question_item' ref={faqItem} id={`question_${id}`}>
            <div className='question_header'>
                <h4>{question}</h4>
                <button className='open_close_btn' onClick={toggleFAQ}>
                    {open ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i> }
                </button>
            </div>
            <p style={hide} ref={ans}>{open && answer}</p>
        </li>
    )
}

export default Question




    // const toggleFAQ = useCallback( (id) => {
    //     if(open){
    //         const tl = closeFAQ(id);
    //         tl.add( () => {
    //             setOpen((open) => {
    //                 return !open;
    //             });
    //         }, "+=1");
    //     }else{
    //         const tl = openFAQ(id);
    //         tl.add( () => {
    //             setOpen((open) => {
    //                 return !open;
    //             });
    //         }, "+=1");
    //     }
    // }, [open]);

    // useEffect(() => {
    //     if(open) closeFAQ();
    //     else openFAQ();
    // }, [open]);