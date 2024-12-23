import ClientDetails from "@/components/ClientList/ClientDetails";
import ProtectedAdmin from "@/components/ProtectedAdmin/page";
const clientDetails = () => {
  return (
    <ProtectedAdmin>
      <div>
        <ClientDetails />
      </div>
    </ProtectedAdmin>
  );
};

export default clientDetails;
