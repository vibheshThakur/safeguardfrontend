
**Project Proposal: Safe Guard**

**Project Overview**

**Project Name:** Safe Guard
**Team:** Team CodeEase

**Target Users:**

- Administrators
- Developers

**Purpose:**
Safe Guard is designed to streamline the management of sensitive credentials, system assignments, and internal communication through a dual-dashboard system for administrators and Developers. Additionally, it will provide an AI-powered tool to assist developers by automating code reviews and suggesting improvements.

**1. Project Objectives**

The Safe Guard project aims to:

- **Role-based Access Control:** Clearly differentiate between administrator and employee functionalities with proper security measures.
- **Secure Credential Management:** Safely manage sensitive data, such as payment gateway details, system assignments, and communication.
- **AI-Powered Code Review:** Automate code reviews for developers, helping to identify bugs, suggest improvements, and ensure best practices are followed.
- **Enhanced Communication:** Enable administrators to share critical messages with employees, ensuring real-time updates and operational efficiency.
- **Streamlined Workflows:** Optimize task tracking and system assignments for better collaboration and productivity.

**2. Key Features and Functionalities**

**Admin Dashboard**

The Admin Dashboard will provide administrators with tools for managing system configurations, user roles, and communications. Key features include:

- **Payment Gateway Details:**
  - View and update essential information related to payment systems (vendor, API keys, URLs, etc.).
  - Ensure secure management and operations by updating or deleting details as necessary.

- **System Assignment Details:**
  - Real-time tracking of system tasks and assignments given to employees.
  - Monitor ongoing tasks, track progress, and make adjustments as needed.

- **Important Notifications:**
  - Admins can post critical messages or alerts (e.g., system downtime, emergency updates) for employees.
  - Notifications can be categorized by importance (urgent, normal, informational).

- **Vendor Code Details:**
  - Centralized view of Vendor codes and related payment information.
  - Ensure proper management and access control for payment processing.

- **Merchant Details:**
  - Centralized view of merchant codes and related payment information.
  - Ensure proper management and access control for payment processing.

- **Admin Code Details:**
  - Access to internal admin system codes, with secure management to ensure system integrity.

- **AI-Powered Code Review Tool:**
  - Developers can upload their code for review.
  - Admins can view feedback from the AI tool, including bug reports, optimization suggestions, and best practices.
  - Admins can approve or reject changes suggested by the AI tool.

**Developers Dashboard**

The Employee Dashboard will be designed with limited access, tailored to employee needs. Features include:

- **Payment Gateway Details:**
  - Employees can view (and edit, if authorized) payment gateway details like API keys, vendor names, etc.

- **Assigned Details:**
  - View and track system assignments or tasks assigned by admins.
  - Track progress in real-time and receive updates on the task's status.
- **Important Messages:**
  - View critical updates, system alerts, or policy changes posted by administrators.
  - Ensure employees stay informed on relevant operational issues.
- **AI-Powered Code Review Tool (for Developers):**
  - Developers can upload code files to the system.
  - Receive detailed feedback on code quality, including bug identification, code structure improvement suggestions, and adherence to best practices.

**3. User Roles & Access Control**

To maintain security, the system will implement role-based authentication and authorization:

**Admin Access:**

- **Full Control:** Admins have full access to the dashboard and all modules.
- **Management Features:** Admins can modify system settings, update payment gateway details, assign tasks, and post critical notifications.
- **AI Code Review Management:** Admins can view and approve/reject feedback from the AI code review tool.

**Employee Access:**

- **Limited Control:** Employees have access only to areas relevant to their role (payment gateway details, task assignments, and messages).
- **View & Edit Rights:** Employees can view payment gateway details and edit them with admin authorization.
- **Task Overview:** Employees can track their assignments and receive updates.
- **Message View:** Employees can view important messages posted by admins, but cannot post or modify them.

**Developer Access (with AI Code Review):**

- **Code Upload:** Developers can upload their code for review.
- **Feedback Access:** Developers can view feedback on code quality, bugs, and suggestions.
- **Admin Approval:** Admins approve or reject code suggestions for deployment.

**4. System Architecture**

- **Front-end:**
  The front-end will be developed using **React.js** for a responsive design, ensuring ease of use across different devices.
- **Back-end:**
  The back-end will be built using **Node.js** with **RESTful APIs** to handle user interactions and database management. **JWT (JSON Web Tokens)** will be used for secure authentication.
- **Database:**
  A **MySQL** relational database will store user information, credentials, task details, and AI code review feedback securely.
- **Security:**
  - **Encryption:** Sensitive information such as API keys and Vendor codes will be encrypted in the database.
  - **Role-Based Authentication:** Access control will ensure only authorized users can access specific system functionalities.
  - **Regular Security Audits:** Routine audits to ensure no unauthorized access or data breaches.

**5. Technical Requirements**

- **Operating System:** Cross-platform support (Windows, macOS, Linux)
- **Web Browser:** Modern browsers (Chrome, Firefox, Edge)
- **Databases:** MySQL
- **Programming Languages:** JavaScript (React.js, Node.js)
- **AI Integration:** Integration with AI-based code review tools for developers

**6. AI-Powered Code Review Tool for Developers**

**Description:** The AI-Powered Code Review Tool aims to automate the code review process by analyzing uploaded code for bugs, performance improvements, and adherence to best practices.

- **Features:**
  - **Upload & Review:** Developers can upload code files for review.
  - **Bug Detection:** AI will identify bugs and potential issues.
  - **Optimization Suggestions:** The AI suggests improvements for code optimization and efficiency.
  - **Best Practices:** The tool checks whether the code adheres to industry best practices and coding standards.
  - **Admin Approval:** Admins can review and approve or reject AI suggestions.
- **Benefits:**
  - **Time-Saving:** Automates time-consuming manual code reviews.
  - **Quality Assurance:** Ensures higher code quality and fewer bugs in production.
  - **Continuous Learning:** Developers can learn from the feedback provided by the AI tool, improving their coding practices over time.

**Conclusion**

The **Safe Guard** project will provide a secure, role-based, and efficient platform for managing sensitive credentials, tasks, and communication within an organization. By incorporating an **AI-powered Code Review Tool**, it will further enhance developer productivity and ensure code quality. With clear roles, robust security features, and an intuitive interface, Safe Guard will be an essential tool for our organization to streamline their operations while safeguarding sensitive data and improving overall productivity.

**Team Members and their roles.**

|**Name**|**Roles**|
| :- | :- |
|**Anisha Rawat (TL)**|Backend & AI|
|**Nistha Goyal (TL)**|UI and UX|
|**Priya Gupta**|Backend & AI|
|**Prerna Sharma**|Backend & AI|
|**Anish Kumar**|UI and UX|


