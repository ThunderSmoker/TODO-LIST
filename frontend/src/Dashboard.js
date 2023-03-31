import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { ListContainer, ListItem } from "./styles";
import { Container, Button } from "react-floating-action-button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import * as API from "./API/TodoAPI";
import Singletodo from "./components/Singletodo";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate=useNavigate();
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    API.fetchTodos().then((res) => {
      setList(res.data);

      console.log(res.data);
    });
  }, []);

  // const list = List.getList();
  return (
    <div className="App">
      <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;
          const desI = param.destination?.index;
          if (desI) {
            list.splice(desI, 0, list.splice(srcI, 1)[0]);
            const LIST = [];
            for (const i in list) {
              LIST.push({
                title: list[i].title,
                link: list[i].link,
                completed: list[i].completed,
                position: list[i].position,
              });
            }
            const data = { data: LIST };
            API.updatePos(list[srcI]._id, data);

            // List.saveList(list);
          }
        }}
      >
        <ListContainer>
          <div
            style={{
              paddingRight: "10rem",
              paddingLeft: "10rem",
              backgroundColor: "#00FFFF",
              paddingTop: 0,
              paddingBottom: 0,
            }}
          >
            <h1 style={{ margin: 0, marginBottom: "2rem", color: "#0000ff" }}>
              To-do List
            </h1>
          </div>

          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((item, i) => (
                  <Draggable
                    key={item._id}
                    draggableId={"draggable-" + item._id}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 0 .4rem #666"
                            : "none",
                        }}
                      >
                        <Singletodo item={item} provided={provided} />
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ListContainer>
      </DragDropContext>

      <Container>
        <Button onClick={() => navigate('/add-todo')}>
          <AiFillPlusCircle style={{ fontSize: "3rem" }} />
        </Button>
      </Container>
    </div>
  );
};

export default DashBoard;
