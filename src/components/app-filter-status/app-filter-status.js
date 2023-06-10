import './app-filter-status.css';

const AppFilterStatus = () => {
    return (
        <div className="btn-group btn-group-sm me-2"  role="group" aria-label="Second group">
            <button type="button" className="btn btn-primary">All</button>
            <button type="button" className="btn btn-secondary">Done</button>
            <button type="button" className="btn btn-secondary">Important</button>
        </div>  
    );
}

export default AppFilterStatus;