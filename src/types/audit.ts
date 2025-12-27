export interface AuditInsight {
  id: string;
  title: string;
  description: string;
  severity: "low" | "medium" | "high";
}

export interface AuditRecommendation {
  id: string;
  text: string;
}

export interface AuditModuleData {
  id: string;
  name: string;
  score: number;
  insights: AuditInsight[];
  issues: AuditInsight[];
  recommendations: AuditRecommendation[];
}
