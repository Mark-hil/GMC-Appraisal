const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransporter({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  async sendEmail(to, subject, text, html = null) {
    try {
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to,
        subject,
        text,
        html
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', result.messageId);
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  async sendTaskAssignment(task, staffLink, peerLink) {
    const subject = `📋 Task Assignment: ${task.title} - Staff & Peer Links`;
    
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0d6efd, #0056b3); color: white; padding: 20px; text-align: center; border-radius: 8px; }
          .content { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .link-box { background: white; padding: 15px; border: 2px solid #0d6efd; border-radius: 6px; margin: 10px 0; }
          .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>G.M.C Performance Management System</h1>
            <h2>Task Assignment</h2>
          </div>
          
          <div class="content">
            <h3>Task Details</h3>
            <p><strong>Task:</strong> ${task.title}</p>
            <p><strong>Description:</strong> ${task.description}</p>
            <p><strong>Department:</strong> ${task.department}</p>
            <p><strong>Priority:</strong> ${task.priority.toUpperCase()}</p>
            <p><strong>Deadline:</strong> ${new Date(task.deadline).toLocaleDateString()}</p>
            <p><strong>Task Code:</strong> ${task.taskCode}</p>
            
            <h3>Assessment Links</h3>
            
            <div class="link-box">
              <h4>👤 Staff Self-Assessment Link</h4>
              <p><strong>For:</strong> ${task.staffEmail}</p>
              <p><a href="${staffLink}">${staffLink}</a></p>
              <p><em>Instructions: Self-rating and self-comments only</em></p>
            </div>
            
            ${task.peerEmail ? `
            <div class="link-box">
              <h4>👥 Peer Assessment Link</h4>
              <p><strong>For:</strong> ${task.peerEmail}</p>
              <p><a href="${peerLink}">${peerLink}</a></p>
              <p><em>Instructions: Peer rating and feedback only</em></p>
            </div>
            ` : ''}
            
            <div class="alert alert-warning">
              <strong>⚠️ IMPORTANT:</strong>
              <ul>
                <li>Distribute the appropriate links to each person</li>
                <li>Staff should NOT receive the peer link</li>
                <li>Peer should NOT receive the staff link</li>
                <li>Links include automatic role-based privacy</li>
              </ul>
            </div>
          </div>
          
          <div class="footer">
            <p>Best regards,<br>HR Department<br>G.M.C Performance Management System</p>
          </div>
        </div>
      </body>
      </html>
    `;

    return this.sendEmail(process.env.HR_EMAIL || 'hr@company.com', subject, '', html);
  }

  async sendStaffNotification(task, staffLink) {
    const subject = `🔒 CONFIDENTIAL: Self-Assessment Required - ${task.title}`;
    
    const text = `
Dear ${task.staffEmail.split('@')[0]},

🔒 PRIVACY NOTICE: This self-assessment link is for your eyes only. Your responses will remain confidential.

TASK: ${task.title}
DESCRIPTION: ${task.description}
DEPARTMENT: ${task.department}
PRIORITY: ${task.priority.toUpperCase()}
DEADLINE: ${new Date(task.deadline).toLocaleDateString()}

📋 YOUR ROLE: SELF-ASSESSMENT
- Rate your own performance
- Provide self-comments
- Sign with your digital signature

🔗 YOUR PERSONAL LINK:
${staffLink}

⚠️ IMPORTANT: 
- Complete your self-assessment honestly
- Your peer reviewer will assess separately
- Your HOD will see both assessments

Best regards,
HR Department
G.M.C Performance Management System
    `.trim();

    return this.sendEmail(task.staffEmail, subject, text);
  }

  async sendPeerNotification(task, peerLink) {
    const subject = `🔒 CONFIDENTIAL: Peer Assessment Request - ${task.title}`;
    
    const text = `
Dear Colleague,

🔒 PRIVACY NOTICE: Your peer assessment is confidential. The staff member will not see your individual responses.

TASK: ${task.title}
DESCRIPTION: ${task.description}
DEPARTMENT: ${task.department}
PRIORITY: ${task.priority.toUpperCase()}
DEADLINE: ${new Date(task.deadline).toLocaleDateString()}

📋 YOUR ROLE: PEER ASSESSMENT
- Provide objective peer ratings
- Give constructive peer feedback
- Sign with your digital signature

🔗 YOUR PEER ASSESSMENT LINK:
${peerLink}

⚠️ IMPORTANT:
- Provide honest, objective feedback
- Focus on observable behaviors
- Your assessment is confidential
- Staff cannot see your individual ratings

Best regards,
HR Department  
G.M.C Performance Management System
    `.trim();

    return this.sendEmail(task.peerEmail, subject, text);
  }

  async sendHODNotification(review, submittedBy) {
    const hodEmail = await this.getHODEmail(review.department);
    const subject = `${submittedBy} Assessment Submitted - ${review.staffName}`;
    
    const text = `
Dear HOD,

A ${submittedBy.toLowerCase()} assessment has been submitted and requires your attention:

STAFF: ${review.staffName}
STAFF EMAIL: ${review.staffEmail}
DEPARTMENT: ${review.department}
JOB TITLE: ${review.jobTitle}
REVIEW PERIOD: ${new Date(review.periodFrom).toLocaleDateString()} to ${new Date(review.periodTo).toLocaleDateString()}
SUBMITTED BY: ${submittedBy}
SUBMISSION DATE: ${new Date().toLocaleDateString()}
STATUS: ${submittedBy === 'Staff' ? 'Awaiting Peer Review' : 'Ready for HOD Assessment'}

Please log in to the Performance Management System to review and complete the assessment process.

Best regards,
G.M.C Performance Management System
    `.trim();

    return this.sendEmail(hodEmail, subject, text);
  }

  async sendHRCompletionNotification(review) {
    const hrEmail = process.env.HR_EMAIL || 'hr@company.com';
    const subject = `✅ PERFORMANCE REVIEW COMPLETED - ${review.staffName} - ${review.department}`;
    
    const scores = review.scores || {};
    
    const text = `
🏢 PERFORMANCE REVIEW COMPLETION NOTIFICATION

Dear HR Team,

A performance review has been completed and finalized by the HOD. Below are the complete details:

📋 REVIEW SUMMARY:
• Staff Name: ${review.staffName}
• Staff Email: ${review.staffEmail}
• Department: ${review.department}
• Job Title: ${review.jobTitle}
• Review Period: ${new Date(review.periodFrom).toLocaleDateString()} to ${new Date(review.periodTo).toLocaleDateString()}
• Completion Date: ${new Date().toLocaleDateString()}
• Final Status: ✅ COMPLETED

${scores.finalScore ? `
📊 PERFORMANCE SCORES:
• Section A Average (60% weight): ${scores.sectionA?.average || 'N/A'}/5
• Section B Average (40% weight): ${scores.sectionB?.average || 'N/A'}/5
• FINAL OVERALL SCORE: ${scores.finalScore}/5
` : ''}

🏁 NEXT STEPS REQUIRED:
1. HR to archive this completed review
2. Update employee performance records
3. Schedule feedback session if needed
4. Process any training requirements identified

Best regards,
G.M.C Performance Management System
Automated Completion Notification
    `.trim();

    return this.sendEmail(hrEmail, subject, text);
  }

  async getHODEmail(department) {
    // This would typically come from your HOD configuration
    const hodEmails = {
      "MINE OPERATION": "mine.operation.hod@company.com",
      "HUMAN CAPITAL": "human.capital.hod@company.com",
      // Add all departments...
    };
    
    return hodEmails[department] || 'default.hod@company.com';
  }
}

module.exports = new EmailService();