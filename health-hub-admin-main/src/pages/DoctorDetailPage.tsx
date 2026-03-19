import { useParams } from "react-router-dom";

const mockDoctorsDetails = {
    1: {
        fullName: "Dr. Sarah Johnson",
        licenseNumber: "12345-P",
        cnic: "42101-XXXXXXX-X",
        email: "sarah@cityhospital.com",
        contact: "0300XXXXXXX",
        profilePic: "/images/sarah.jpg", 
        degree: "MBBS",
        specialization: "Cardiologist",
        experience: 10,
        bio: "Expert in heart-related diseases and procedures.",
        services: "Echocardiography, Consultations",
        clinic: "City Hospital",
        address: "123 Main Street",
        physicalFee: 1500,
        videoFee: 1000,
    },
};

export default function DoctorDetailPage() {
    const { id } = useParams();
    const doctor = mockDoctorsDetails[Number(id) as keyof typeof mockDoctorsDetails];

    if (!doctor) return <p className="p-6 text-red-500">Doctor not found.</p>;

    return (
        <div className="p-6 lg:p-8 animate-fade-in max-w-3xl mx-auto space-y-8">
            <div className="flex items-center gap-6">
                {doctor.profilePic ? (
                    <img
                        src={doctor.profilePic}
                        alt={doctor.fullName}
                        className="w-32 h-32 object-cover rounded-full border border-gray-300"
                    />
                ) : (
                    <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gray-200 text-gray-500">
                        No Image
                    </div>
                )}
                <h1 className="text-3xl font-bold text-accent-foreground">{doctor.fullName}</h1>
            </div>

            <section className="bg-white shadow rounded-lg p-4 space-y-2">
                <h2 className="text-xl font-semibold border-b pb-2">Identity & Verification</h2>
                <p><strong>Full Name:</strong> {doctor.fullName}</p>
                <p><strong>PMDC / PMC Number:</strong> {doctor.licenseNumber}</p>
                <p><strong>CNIC Number:</strong> {doctor.cnic}</p>
                <p><strong>Email Address:</strong> {doctor.email}</p>
                <p><strong>Contact Number:</strong> {doctor.contact}</p>
            </section>

            <section className="bg-white shadow rounded-lg p-4 space-y-2">
                <h2 className="text-xl font-semibold border-b pb-2">Clinical Profile</h2>
                <p><strong>Primary Degree:</strong> {doctor.degree}</p>
                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                <p><strong>Years of Experience:</strong> {doctor.experience}</p>
                <p><strong>Professional Bio:</strong> {doctor.bio}</p>
                <p><strong>Services Offered:</strong> {doctor.services}</p>
            </section>

            <section className="bg-white shadow rounded-lg p-4 space-y-2">
                <h2 className="text-xl font-semibold border-b pb-2">Clinic & Fees</h2>
                <p><strong>Clinic / Hospital Name:</strong> {doctor.clinic}</p>
                <p><strong>Physical Address:</strong> {doctor.address}</p>
                <p><strong>Physical Visit Fee:</strong> PKR {doctor.physicalFee}</p>
                <p><strong>Video Consult Fee:</strong> PKR {doctor.videoFee}</p>
            </section>
        </div>
    );
}