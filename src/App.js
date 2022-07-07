import Tags from "./components/Tags";
import Title from "./components/Title";
import Menu from "./components/Menu";
import InventoryList from "./components/InventoryList";
import InventoryDetail from "./components/InventoryDetail";
import { roomsMock, tagsMock, inventoryMock } from "./mocks";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <main className="flex flex-1">
          <div className="w-1/2 p-5 border-l border-gray-100">
            <Title label="Inventory" add={true} classes={['pl-2']} />
            <InventoryList items={inventoryMock} />
          </div>
          <div className="w-1/2 p-5 bg-white border-l border-gray-100">
            <InventoryDetail />
          </div>
        </main>

        <aside className="order-first bg-white w-60">
          <div className="p-2 border-b border-gray-100">User info</div>
          <Title add={true} label="Rooms" classes={['pl-2']} />
          <Menu items={roomsMock}/>
          <Title label="Tags" classes={['pl-2']} />
          <Tags items={tagsMock} />
        </aside>
      </div>
    </div>
  )
}