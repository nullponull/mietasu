import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Edit, Shield, Users, Folder } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">管理者設定</h1>
      </div>
      
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="users">ユーザー管理</TabsTrigger>
          <TabsTrigger value="roles">ロール管理</TabsTrigger>
          <TabsTrigger value="projects">プロジェクト管理</TabsTrigger>
        </TabsList>

        {/* Users Tab */}
        <TabsContent value="users" className="space-y-4 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>ユーザー一覧</CardTitle>
                <CardDescription>システムを利用するユーザーを管理します</CardDescription>
              </div>
              <Button size="sm"><Plus className="w-4 h-4 mr-2" />ユーザー追加</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>名前</TableHead>
                    <TableHead>メールアドレス</TableHead>
                    <TableHead>ロール</TableHead>
                    <TableHead>ステータス</TableHead>
                    <TableHead className="text-right">操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: "山田 太郎", email: "taro@example.com", role: "管理者", status: "有効" },
                    { name: "鈴木 花子", email: "hanako@example.com", role: "編集者", status: "有効" },
                    { name: "佐藤 次郎", email: "jiro@example.com", role: "閲覧者", status: "招待中" },
                  ].map((user, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.role}</Badge>
                      </TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          user.status === "有効" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon"><Edit className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="text-red-500"><Trash2 className="w-4 h-4" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Roles Tab */}
        <TabsContent value="roles" className="space-y-4 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>ロール管理</CardTitle>
                <CardDescription>権限セットを定義・管理します</CardDescription>
              </div>
              <Button size="sm"><Plus className="w-4 h-4 mr-2" />ロール追加</Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "管理者", desc: "全ての操作が可能な特権ロール", color: "bg-red-50 border-red-200" },
                  { name: "編集者", desc: "コンテンツの作成・編集が可能", color: "bg-blue-50 border-blue-200" },
                  { name: "閲覧者", desc: "コンテンツの閲覧のみ可能", color: "bg-gray-50 border-gray-200" },
                ].map((role, i) => (
                  <Card key={i} className={`border ${role.color}`}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        {role.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{role.desc}</p>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">権限設定</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-4 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>プロジェクト管理</CardTitle>
                <CardDescription>プロジェクトの作成・アーカイブ・削除</CardDescription>
              </div>
              <Button size="sm"><Plus className="w-4 h-4 mr-2" />プロジェクト作成</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "次世代基盤開発", members: 12, files: 45, status: "進行中" },
                  { name: "マーケティング施策2024", members: 8, files: 23, status: "進行中" },
                  { name: "社内DX推進", members: 5, files: 12, status: "完了" },
                ].map((project, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        <Folder className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{project.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                          <span className="flex items-center"><Users className="w-3 h-3 mr-1" /> {project.members}名</span>
                          <span>{project.files}ファイル</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={project.status === "進行中" ? "default" : "secondary"}>{project.status}</Badge>
                      <Button variant="ghost" size="sm">設定</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
