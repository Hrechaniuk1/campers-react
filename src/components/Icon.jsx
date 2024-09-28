import sprite from '../assets/sprite.svg'

const Icon = ({ id, width = 24, height = 24, cl }) => {
    return (
        <svg className={cl} width={width} height={height}>
            <use href={`${sprite}#${id}`} />
        </svg>
    );
};

export default Icon