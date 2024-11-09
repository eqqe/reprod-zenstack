Hello, I have a typescript error when I add a relation to a model that is delegated like "PostWithCoauthor".

I have to specify the owner when specifying coauthor, whereas for a normal post it's automatic.

```
npm install

npx zenstack generate

npx prisma db push

npx tsc main.ts
```


Typescript error:
```
Property 'owner' is missing in type '{ title: string; coauthor: { connect: { id: string; }; }; }' but required in type 'PostWithCoauthorCreateInput'.ts(2322)
```

```ts
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


```
