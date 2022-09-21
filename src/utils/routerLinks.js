export default (name, type) => {
  const array = {
    ResetPassword: "/auth/reset-password",
    ConfirmPassword: "/auth/confirm-password",
    Login: "/auth/login",
    Pages403: "/403",
    Pages404: "/404",
    Pages500: "/500",
    BusinessCRUD: "/crud",
    Home: "/home",
    User: "/user",
    Profile: "/setting/profile",
    Website: "/setting/website",
    Activity: "/activity",
    Trello: "/trello",
    Chat: "/chat",
    Chat2: "/chat2",
    Dashboard: "/dashboard",
    DashboardCEO: "/dashboard/ceo",
    DashboardManager: "/dashboard/manager",
    DashboardPersonal: "/dashboard/personal",
    Customer: "/customer",
    CustomerCompanyService: "/company",
    CustomerCustomer: "/customer/customer",
    CustomerCompany: "/customer/company",
    CustomerLead: "/customer/lead",
    Project: "/project",
    ProjectProject: "project/project",
    Task: "/task",
    Employee: "/employee",
    EmployeeEmployee: "/employee/employee",
    EmployeeOffboarding: "/employee/offboarding",
    EmployeeStructure: "/employee/structure",
    Working: "/working",
    WorkingLeave: "/working/leave",
    WorkingAttendance: "/working/attendance",
    OTWorkingTimeLog: "/working/ot-time-log",
    WorkingTimeLog: "/working/time-log",
    Communication: "/communication",
    Report: "/report",
    Target: "/target",
    Ticket: "/ticket",
    Documents: "/documents",
    Booking: "/booking",
    ELearning: "/e-learning",
    Recruitment: "/recruitment",
    Template: "/template",
    TemplateStatus: "/template/status",
    TemplateMaster: "/template/master",
    TemplateProject: "/template/project",
    TemplateBoard: "/template/board",
    Settings: "/settings",
    SettingsGeneral: "/settings/general",
    SettingsLeave: "/settings/leave",
    SettingsBooking: "/settings/booking",
    SettingsAccount: "/settings/account",
    SettingsNotification: "/settings/notification",
    Notification: "/notification",
    BookingType: "booking/type",
    Finance: "/Finance",
    Financeoperationcost: "/Financeoperationcost",
    // News: "/news",
  }; // 💬 generate link to here

  const apis = {
    FinanceVendor: 'finance/Vendor',
    CheckSlug: "/check-slug",
    Permission: "/Permission",
    RolePermission: "/role-permission",
    User: "/user",
    Role: "/role",
    Profile: "/auth",
    Website: "/setting",
    Activity: "/activity",
    Trello: "/trello",
    Chat: "/chat",
    Chat2: "/chat2",
    Dashboard: "/dashboard",
    DashboardPersonal: "/dashboard/personal",
    DashboardManager: "/dashboard/manager",
    DashboardCEO: "/dashboard/ceo",
    Customer: "/customer",
    CustomerCompanyService: "/company",
    Lead: "/lead",
    Project: "/project",
    ProjectProject: "project/project",
    Task: "/task",
    Employee: "/employee",
    Working: "/working",
    Communication: "/communication",
    Report: "/report",
    Target: "/target",
    Tickets: "/tickets",
    Document: "/Document",
    Booking: "/booking",
    ELearning: "/e-learning",
    Recruitment: "/recruitment",
    Template: "/template",
    TemplateStatus: "/TemplateStatus",
    TemplateMaster: "/TemplateMasterList",
    ATemplateMaster: "/ATemplateMaster",
    TemplateMasterHistory: "/TemplateMasterListHistory",
    ATemplateMasterHistory: "/ATemplateMasterHistory",
    TemplateBoard: "/TemplateBoard",
    TemplateBoardTask: "/TemplateBoardTask",
    TemplateBoardSubTask: "/TemplateBoardSubTask",
    TemplateBoardAttachment: "/TemplateBoardAttachment",
    TemplateProject: "/TemplateProject",
    TemplateProjectBoard: "/TemplateProjectBoard",
    TemplateProjectTask: "/TemplateProjectTask",
    TemplateProjectSubTask: "/TemplateProjectSubTask",
    TemplateProjectAttachment: "/TemplateProjectAttachment",
    TemplateProjectTaskCondition: "/TemplateProjectTaskCondition",
    Master: "/MasterList",
    AMaster: "/AMaster",
    MasterHistory: "/MasterListHistory",
    AMasterHistory: "/AMasterHistory",
    MasterListRequest: "/MasterListRequest",
    Settings: "/settings",
    Province: "/Province",
    District: "/District",
    Ward: "/Ward",
    Potential: "/Potential",
    Industry: "/Industry",
    Department: "/Structure/Department",
    JobTitle: "/Structure/jobTitle",
    Structure: "/Structure",
    Board: "/Board",
    BoardTask: "/BoardTask",
    BoardSubTask: "/BoardSubTask",
    BoardTaskAttachment: "/BoardTaskAttachment",
    BoardTaskCondition: "/BoardTask/condition",
    LogTime: "/LogTime",
    Company: "/setting/company",
    SettingAccount: "/setting/account",
    SettingCompany: "/setting/company",
    PermissionGroup: "/permission/group",
    PermissionPermission: "/permission/permission",
    Notification: "/notification",
    // News: "/news",
    LeavePolicy: "/LeavePolicy",
    Leave: "/Leave",
    Ticket: "/Ticket",
    Cost: "/Cost",
    CostType: "finance/CostType",
    PurchaseOrder: "/PurchaseOrder",
    PurchasePlan: "finance/PurchasePlan",
    MasterCustomer: "/Setting/CustomerMaster/password",
    BookingType: "Booking/type",
    BookingRoom: "Booking/room",
    BookingBriefingTask: "Booking/briefing/task",
    CostOperationOperation: "/finance/CostOperation/operation" ,
    POList: "/finance/CostOperation/po" ,
    ApproverSetting :"/finance/CostOperation/approverSetting",
    RequestPayment: "/finance/CostOperation/requestPayment" ,
    FinanceCostOperation: '/finance/CostOperation',
    RequestAdvanceMoney: "/finance/CostOperation/requestAdvanceMoney" ,  }; // 💬 generate api to here

  switch (type) {
    case "api":
      return apis[name];
    default:
      return array[name];
  }
};
