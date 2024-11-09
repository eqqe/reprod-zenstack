import { PrismaClient } from "@prisma/client";
import { enhance } from "@zenstackhq/runtime";


async function main() {
	const prisma = new PrismaClient();

	const user = await prisma.user.create({
		data: {
			email: "example@example.com",
			password: "example",
		}
	});

	const enhanced = enhance(prisma, {
		user
	});

	await enhanced.post.create({
		data: {
			title: "new post"
		}
	})




	/* 

	Error typescript


	Property 'owner' is missing in type '{ title: string; coauthor: { connect: { id: string; }; }; }' but required in type 'PostWithCoauthorCreateInput'.ts(2322)

	*/

	await enhanced.postWithCoauthor.create({
		data: {
			title: "new post",
			coauthor: {
				connect: {
					id: user.id
				}
			},
		}
	})



}

main()
