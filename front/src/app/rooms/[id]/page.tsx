import RoomDetail from "@/components/Rooms/RoomDetail";
import { getRoomById } from "@/api/getRooms";
import NotFound from "@/app/not-found";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    const room = await getRoomById(id);

    if (!room) {
      return <NotFound />;
    }

    return (
      <div className="min-h-[75vh] pt-40 pb-20 px-16">
        <RoomDetail {...room} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching room:", error);

    return <NotFound />;
  }
};

export default Page;
