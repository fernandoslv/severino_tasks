import { Card, CardHeader } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';


function Tarefas(props) {
    return (

        <Card>
            <CardHeader>
                <CardTitle tag="h5">
                    Minhas Tarefas
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Tarefa
                            </th>
                            <th>
                                Data
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.tarefas.length > 0 ? (
                            props.tarefas.map((tarefa, index) => (
                                <tr key={index}>
                                    <td>{tarefa.tarefa}</td>
                                    <td>{tarefa.data}</td>
                                    <td><Button color='danger' onClick={()=> props.setTarefas(props.tarefas.filter((item, i) => i!==index))} size='sm'>x</Button></td>
                                    {/* onClick={setTarefas = tarefas.filter((item, i) => i==index)} */}
                                </tr>
                            )
                            )
                        ) :
                            <tr>
                                <td colSpan={3}>
                                    <p>Nenhuma tarefa pendente.</p>
                                </td>
                            </tr>
                        }
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}

export default Tarefas;
