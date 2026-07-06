export default function Privacy() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert prose-indigo">
        
        <h1 className="text-3xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-10">Last Updated: October 15, 2023</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Clip AI Pro. We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy will inform you about how we look after your personal data when you visit our 
            website or use our application, and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Data Collection</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, operating system and platform.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Security Policy</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section className="mb-10" id="cookies">
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Cookies Policy</h2>
          <p>
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
