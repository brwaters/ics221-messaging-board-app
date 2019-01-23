const React = require("react");

const MsgList = (props) => {
  
        return (
                <table className="Table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="col-1">
                                #(msg number)
                            </th>
                            <th scope="col" className="col-2">
                                Name
                            </th>
                            <th scope="col" className="col-9">
                                Message
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.messages.reverse().map( (message, index) =>
                            <tr key={message.id}>
                                <td>{index+1}</td>
                                <td>{message.name}</td>
                                <td>{message.msg}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
        )
}

module.exports = MsgList;