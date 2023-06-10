import AppListItem from "../app-list-item";
import './app-list.css';

const AppList = function( {dataList, deleteItem} ) {

  const listItem = dataList.map(item => {
    return (
        <li key={item.id} 
          className="list-group-item app-list">
          <AppListItem 
          text={item.text}
          important={item.important}
          image = {item.image}
          deleteItem={() => deleteItem(item.id)}
          />
      </li>
    )
  })

  return (
    <ul className="list-group">
        {listItem}
    </ul>
  )
};

export default AppList;