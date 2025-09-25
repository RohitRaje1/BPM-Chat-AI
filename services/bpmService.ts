
import { ProcessData, TaskStatus } from '../types';

const mockData: Record<string, ProcessData> = {
  'SRV-2024-001': {
    serviceId: 'SRV-2024-001',
    processName: 'New Client Onboarding',
    status: 'Active',
    currentTask: 'T2',
    tasks: [
      {
        id: 'T1',
        name: 'Initial Contact & Data Collection',
        assignee: 'Alice Johnson',
        status: TaskStatus.COMPLETED,
        startDate: '2024-07-15',
        endDate: '2024-07-16',
        details: 'Initial client call completed and required documents received.'
      },
      {
        id: 'T2',
        name: 'Legal Vetting',
        assignee: 'Bob Williams',
        status: TaskStatus.BLOCKED,
        startDate: '2024-07-17',
        details: 'Blocked pending compliance sign-off from the Finance department. Awaiting response to email sent on 2024-07-18.'
      },
      {
        id: 'T3',
        name: 'Account Setup',
        assignee: 'Charlie Brown',
        status: TaskStatus.NOT_STARTED,
        startDate: '2024-07-20',
        details: 'System account to be created once legal vetting is complete.'
      },
       {
        id: 'T4',
        name: 'Welcome Kit Dispatch',
        assignee: 'Diana Miller',
        status: TaskStatus.NOT_STARTED,
        startDate: '2024-07-22',
        details: 'Physical and digital welcome kits to be sent.'
      }
    ]
  },
  'SRV-2024-002': {
    serviceId: 'SRV-2024-002',
    processName: 'Software License Renewal',
    status: 'Active',
    currentTask: 'T2',
    tasks: [
      {
        id: 'T1',
        name: 'Usage Audit',
        assignee: 'Eve Davis',
        status: TaskStatus.COMPLETED,
        startDate: '2024-07-18',
        endDate: '2024-07-19',
        details: 'User license usage for the past year has been audited.'
      },
      {
        id: 'T2',
        name: 'Procurement Approval',
        assignee: 'Frank White',
        status: TaskStatus.IN_PROGRESS,
        startDate: '2024-07-20',
        details: 'Renewal quote submitted to procurement. Awaiting PO generation.'
      },
      {
        id: 'T3',
        name: 'Vendor Payment',
        assignee: 'Grace Hall',
        status: TaskStatus.NOT_STARTED,
        startDate: '2024-07-25',
        details: 'Payment to be processed upon receiving the Purchase Order.'
      }
    ]
  },
  'SRV-2024-003': {
    serviceId: 'SRV-2024-003',
    processName: 'Hardware Maintenance Request',
    status: 'Completed',
    currentTask: 'T3',
    tasks: [
      {
        id: 'T1',
        name: 'Technician Dispatch',
        assignee: 'Henry Green',
        status: TaskStatus.COMPLETED,
        startDate: '2024-07-10',
        endDate: '2024-07-10',
        details: 'Technician assigned and dispatched to client site.'
      },
      {
        id: 'T2',
        name: 'On-site Repair',
        assignee: 'Henry Green',
        status: TaskStatus.COMPLETED,
        startDate: '2024-07-11',
        endDate: '2024-07-11',
        details: 'Replaced faulty power supply unit. System tested OK.'
      },
      {
        id: 'T3',
        name: 'Close Request Ticket',
        assignee: 'IT Support Bot',
        status: TaskStatus.COMPLETED,
        startDate: '2024-07-12',
        endDate: '2024-07-12',
        details: 'Client confirmed resolution. Ticket closed.'
      }
    ]
  }
};

export const getProcessData = (serviceId: string): ProcessData | null => {
  return mockData[serviceId.toUpperCase()] || null;
};
