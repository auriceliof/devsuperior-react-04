import './styles.css';

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => {
  return (
    <div className="btn-container">
      <button type="submit" className="btn btn-primary">
        <h6>{text}</h6>
      </button>
    </div>
  );
};
export default ButtonIcon;
