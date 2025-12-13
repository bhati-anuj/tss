
export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms and Conditions</h1>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this school website, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on the school website for personal, non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">3. Disclaimer</h2>
                        <p>
                            The materials on the school website are provided on an 'as is' basis. The school makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">4. Limitations</h2>
                        <p>
                            In no event shall the school or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the school website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">5. Privacy Policy</h2>
                        <p>
                            We are committed to protecting your privacy. Any information collected will be used in accordance with our privacy policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">6. Contact Information</h2>
                        <p>
                            If you have any questions about these terms and conditions, please contact us at info@school.edu
                        </p>
                    </section>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
}