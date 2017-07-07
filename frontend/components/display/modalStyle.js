const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0,0,0,0.8)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    margin          : 'auto',
    border          : '1px solid #ccc',
    backgroundColor : 'white',
    padding         : '20px',
    zIndex          :  11,
    width           : '350px',
    height          : '350px',
  }
};

export default ModalStyle;
