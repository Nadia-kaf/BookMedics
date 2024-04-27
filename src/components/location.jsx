export default function Location(){
    return(
        <section class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
        </div>
        <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/place/MEST+Africa/@5.6443376,-0.1517205,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9b550b4b1287:0x5bfe4abfd88d302b!8m2!3d5.6443376!4d-0.1517205!16s%2Fm%2F0bmd6g4?entry=ttuhttps://www.google.com/maps/place/MEST+Africa/@5.6443376,-0.1542954,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9b550b4b1287:0x5bfe4abfd88d302b!8m2!3d5.6443376!4d-0.1517205!16s%2Fm%2F0bmd6g4?entry=ttu"
                        width="100%" height="480" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div>
                    <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div class="px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                            <p class="mt-1 text-gray-600">Alunguituigui, Accra-Ghana</p>
                        </div>
                       
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                            <p class="mt-1 text-gray-600">Email: info@example.com</p>
                            <p class="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}