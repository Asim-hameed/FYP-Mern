import "./widgetLg.css";
import image from './logo.jpg'
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={image}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">XYZ</span>
          </td>
          <td className="widgetLgDate">27 Jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={image}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">XYZ</span>
          </td>
          <td className="widgetLgDate">27 Jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={image}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">XYZ</span>
          </td>
          <td className="widgetLgDate">27 Jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
                  </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={image}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">XYZ</span>
          </td>
          <td className="widgetLgDate">27 Jun 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          
        </tr>
      </table>
    </div>
  );
}
