import ReactDOM from 'react-dom';
import './Modal.css'; 
export default function Modal({children, handleClose, isSalesModal}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal" style={{
      border: "4px solid",
      borderColor: isSalesModal ? 'blueviolet' : "#555",
      textAlign: 'center',
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    }}>
      {children}
      <br/>
      <button onClick={handleClose} className={ isSalesModal ? "sales-btn" : "" }>Cancel</button>
</div>
   </div>
  ), document.body)
}