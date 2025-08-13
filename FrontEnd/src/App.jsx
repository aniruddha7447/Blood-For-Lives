// import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import { store } from "./App/store.jsx";
import About from "./pages/About.jsx";
import AddEvent from "./pages/Admin/AddEvent.jsx";
import AddUser from "./pages/Admin/AddUser.jsx";
import AdminHome from "./pages/Admin/AdminHome.jsx";
import Contactus from "./pages/ContactUs.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserHome from "./pages/User/UserHome.jsx";
import BloodDonationHistory from "./pages/Admin/BloodDonationHistory.jsx";
import CreateUserBloodDonation from "./pages/Admin/CreateUserBloodDonation.jsx";

import CreateAppointment from "./pages/User/CreateAppointment.jsx";
import PendingAppointments from "./pages/Admin/PendingAppointments.jsx";
import AllAppointment from "./pages/Admin/AllAppointment.jsx";
import AppointmentHistory from "./pages/User/AppointmentHistory.jsx";
import { PendingUserVerification } from "./pages/Admin/PendingUserVerification.jsx";
import BloodStock from "./pages/Admin/BloodStock.jsx";
import { DonationHistory } from "./pages/User/DonationHistory.jsx";
import UpcomingEvents from "./pages/Admin/UpcomingEvents.jsx";
import ListAllUsers from "./pages/Admin/ListAllUsers.jsx";
import AddAddress from "./pages/User/AddAddress.jsx";
import GetAllAddresses from "./pages/User/GetAllAddresses.jsx";
import FAQ from "./pages/FAQ.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
let persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/aboutus" element={<About />}></Route>
            <Route path="/contactus" element={<Contactus />}></Route>
            <Route path="/addevent" element={<AddEvent />}></Route>
            <Route path="/adminhome" element={<AdminHome />}></Route>
            <Route path="/adduser" element={<AddUser />}></Route>
            <Route path="/userhome" element={<UserHome />}></Route>
            <Route path="/bloodStock" element={<BloodStock />}></Route>
            <Route path="/addaddress" element={<AddAddress />}></Route>
            <Route path="/getalladdresses" element={<GetAllAddresses />}></Route>
            {/* <Route path="/faq" element={<FAQ />}></Route> */}
            <Route
              path="/blooddonationhistory"
              element={<BloodDonationHistory />}
            ></Route>
            <Route
              path="/createuserblooddonation"
              element={<CreateUserBloodDonation />}
            ></Route>
            <Route
              path="/createappointment"
              element={<CreateAppointment />}
            ></Route>
            <Route
              path="/pendingappointment"
              element={<PendingAppointments />}
            ></Route>
            <Route path="/all_appointment" element={<AllAppointment />}></Route>
            <Route
              path="/appointmentHistory"
              element={<AppointmentHistory />}
            ></Route>
            <Route
              path="/pendinguserverification"
              element={<PendingUserVerification />}
            ></Route>
            <Route
              path="/createappointment"
              element={<CreateAppointment />}
            ></Route>
            <Route
              path="/donationhistory"
              element={<DonationHistory />}
            ></Route>
            <Route path="/upcomingevents" element={<UpcomingEvents />}></Route>
            <Route path="/listallusers" element={<ListAllUsers />}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>

          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
