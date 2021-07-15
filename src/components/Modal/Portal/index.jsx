import ReactDOM from 'react-dom';

export default ({ children }) => {
  const portal = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, portal);
}

