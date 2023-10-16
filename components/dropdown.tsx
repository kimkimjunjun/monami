import React from 'react';

const Dropdown = props => {
    const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);

    React.useEffect(() => {
        {/* ← add */ }
        if (props.visibility) {
            setVisibilityAnimation(true);
        } else {
            setTimeout(() => {
                setVisibilityAnimation(false);
            }, 400);
        }
    }, [props.visibility]);

    return (
        <article className={`${props.visibility ? 'slide-fade-in-dropdown z-0' : 'slide-fade-out-dropdown z-0'}`}>
            {visibilityAnimation && props.children}       {/* ← modify */}
        </article>
    )
};

export default Dropdown;