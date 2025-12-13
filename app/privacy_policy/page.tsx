
export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
                <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
                
                <p className="text-gray-600 mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Introduction</h2>
                    <p className="text-gray-700 mb-4">
                        This Privacy Policy explains how our school collects, uses, and protects student and parent information.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Information We Collect</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Student names, dates of birth, and contact information</li>
                        <li>Parent/guardian information</li>
                        <li>Academic records and grades</li>
                        <li>Attendance records</li>
                        <li>Emergency contact information</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">How We Use Information</h2>
                    <p className="text-gray-700 mb-4">
                        We use collected information to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Provide educational services</li>
                        <li>Communicate with parents and students</li>
                        <li>Maintain school safety</li>
                        <li>Comply with legal requirements</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Data Security</h2>
                    <p className="text-gray-700">
                        We implement appropriate security measures to protect personal information from unauthorized access and disclosure.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
                    <p className="text-gray-700">
                        For privacy concerns, please contact our administration office.
                    </p>
                </section>
            </div>
        </div>
    );
}