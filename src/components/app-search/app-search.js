import './app-search.css';

const AppSearch = function() {
  return (
    <div className="input-group app-search flex-grow-1">
      <input type="text" className="form-control" placeholder="search todo list" aria-label="Recipient's username" aria-describedby="button-addon2" />
    </div>
  ); 
};

export default AppSearch;