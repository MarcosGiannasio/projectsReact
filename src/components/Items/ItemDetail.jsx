

export default function ItemDetail({ item }) {
         return (
          <div className="item-list">
                            <div>
                              <img src={item.image} width={125} alt="" />
                              <h2>{item.title}</h2>
                              <p>{item.description}</p>
                              <span>{item.price}</span>
                              </div>
                            </div> 
          );
} 
