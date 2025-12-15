import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreVertical, Folder, Users, Clock } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProjectList() {
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "archived">("active");

  const projects = [
    {
      id: 1,
      name: "次世代基盤開発",
      description: "クラウドネイティブな新基盤システムの設計と実装",
      members: 12,
      updated: "2時間前",
      status: "進行中",
      role: "管理者"
    },
    {
      id: 2,
      name: "マーケティング施策2024",
      description: "Q1-Q4のマーケティングキャンペーン計画",
      members: 8,
      updated: "1日前",
      status: "進行中",
      role: "編集者"
    },
    {
      id: 3,
      name: "社内DX推進",
      description: "業務フローのデジタル化と効率化プロジェクト",
      members: 5,
      updated: "3日前",
      status: "検討中",
      role: "閲覧者"
    },
    {
      id: 4,
      name: "セキュリティ監査対応",
      description: "ISMS認証更新に向けた監査対応タスク",
      members: 4,
      updated: "1週間前",
      status: "完了",
      role: "管理者",
      isArchived: true
    }
  ];

  // Add isArchived property to other projects for consistency
  const projectsWithStatus = projects.map(p => ({ ...p, isArchived: p.id === 4 }));

  const filteredProjects = projectsWithStatus.filter(p => {
    if (filterStatus === "all") return true;
    if (filterStatus === "active") return !p.isArchived;
    if (filterStatus === "archived") return p.isArchived;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">プロジェクト一覧</h1>
          <p className="text-gray-500 mt-1">参加しているプロジェクトの管理と新規作成が行えます</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          新規プロジェクト
        </Button>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-lg border shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="プロジェクトを検索..." className="pl-9" />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {filterStatus === "active" ? "アクティブ" : filterStatus === "archived" ? "アーカイブ済み" : "すべて"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilterStatus("active")}>アクティブ</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus("archived")}>アーカイブ済み</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus("all")}>すべて</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">並び替え</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-md transition-shadow group relative">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Badge variant={project.status === "完了" ? "secondary" : "default"} className={project.status === "完了" ? "" : "bg-blue-100 text-blue-700 hover:bg-blue-200"}>
                    {project.status}
                  </Badge>
                  {project.role === "管理者" && (
                    <Badge variant="outline" className="text-xs border-orange-200 text-orange-600 bg-orange-50">
                      管理者
                    </Badge>
                  )}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>設定</DropdownMenuItem>
                    <DropdownMenuItem>メンバー管理</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">プロジェクトを削除</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Link href={`/project/${project.id}`} className="block mt-2">
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Folder className="w-5 h-5 text-gray-400" />
                  {project.name}
                </CardTitle>
              </Link>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2 h-10">
                {project.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {project.members}名
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {project.updated}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
