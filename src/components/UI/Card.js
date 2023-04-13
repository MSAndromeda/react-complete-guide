import './Card.css';

function Card ( props )
{
  const classesName = 'card ' + props.className;
  return (
    <div className={ classesName }>{ props.children }</div>
  );
}

export default Card;