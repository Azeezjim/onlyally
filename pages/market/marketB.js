import ProfileNavBar from "../../components/ProfileNavBar";
import MarketButtons from "../../components/MarketButtons.jsx";
import MarketForm from "../../components/MarketForm.jsx";

function MaeketB() {
  return (
    <div>
      <div className="flex p-2 rounded shadow">
        <ProfileNavBar className="w-24 mb-8" />
        <div className=" w-full px-1 mx-auto pt-3 mr-24  mt-12 bg-white rounded">
          <MarketButtons />
          <p className="font-semibold ml-10 mt-4">Product</p>
          <MarketForm />
        </div>
      </div>
    </div>
  );
}

export default MaeketB;
